"use client";
import React, { useState } from 'react';
import './style.css';
import { Modal } from 'react-bootstrap';

export default function SendBox() {
  const [show, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [selectedTimes, setSelectedTimes] = useState(new Set());
  const [message, setMessage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  const weekdays = ["一", "二", "三", "四", "五"];
  const timeslots = [
    "D1\n08:10 - 09:00", "D2\n09:10 - 10:00", "D3\n10:10 - 11:00", "D4\n11:10 - 12:00",
    "DN\n12:40 - 13:30", "D5\n13:40 - 14:30", "D6\n14:40 - 15:30", "D7\n15:40 - 16:30",
    "D8\n16:40 - 17:30", "E0\n17:40 - 18:30"
  ];

  const toggleTimeslot = (day: string, time: string) => {
    const key = `${day}-${time}`;
    const newSelection = new Set(selectedTimes);
    newSelection.has(key) ? newSelection.delete(key) : newSelection.add(key);
    setSelectedTimes(newSelection);
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = "40px";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
    setMessage(textarea.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.trim() !== "" || imageFile) {
      console.log("✅ 發送訊息:", message);
      if (imageFile) console.log("🖼 附帶圖片:", imageFile.name);
      setMessage("");
      setImageFile(null);
      setImagePreviewUrl(null);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreviewUrl(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="input-container1" style={{ display: "flex", alignItems: "flex-end", marginBottom: "-5px" }}>
        {imagePreviewUrl && (
          <div className='photobar' style={{
            position: "absolute",
            bottom: "80px",
            left: "12px",
            borderRadius: "12px",
            padding: "6px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
          }}>
            <img
              src={imagePreviewUrl}
              alt="預覽圖片"
              style={{ maxWidth: "120px", maxHeight: "120px", borderRadius: "6px" }}
            />
            <button
              onClick={() => {
                setImageFile(null);
                setImagePreviewUrl(null);
              }}
              style={{
                marginTop: "4px",
                backgroundColor: "transparent",
                border: "none",
                color: "#f44336",
                cursor: "pointer",
                fontSize: "12px"
              }}
            >
              ❌ 移除圖片
            </button>
          </div>
        )}
      </div>

      <div className="input-container">
        <button className="classtable" onClick={handleShow1}>
          <img className="sendicon" src="/img/add.png" />
        </button>

        <Modal show={show} onHide={handleClose1} dialogClassName="custom-modal1">
          <div className="modal-header">
            <h1 className="modalfont">新增課表</h1>
            <button className="close-button" onClick={handleClose1}>&times;</button>
          </div>

          <div className="modal-content1">
            <p>請選擇有課的時間</p>
            <div className="grid-header-container">
              <div className="grid-header"></div>
              {weekdays.map((day) => (
                <div key={day} className="grid-header">{day}</div>
              ))}
            </div>

            <div className="schedule-grid">
              {timeslots.map((time) => (
                <div key={time} className="grid-row">
                  <div className="time-label">{time}</div>
                  {weekdays.map((day) => {
                    const key = `${day}-${time}`;
                    return (
                      <div
                        key={key}
                        className={`grid-cell ${selectedTimes.has(key) ? "selected" : ""}`}
                        onClick={() => toggleTimeslot(day, time)}
                      ></div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="modal-footer1">
            <button className="confirm-button" style={{ marginRight: "10px" }} onClick={handleClose1}>取消</button>
            <button className="confirm-button" onClick={handleClose1}>確定</button>
          </div>
        </Modal>

        <label className="classtable">
          <img className="sendicon" src="/img/image.png" />
          <input type="file" accept="image/*" onChange={handleImageChange} hidden />
        </label>

        <textarea
          className="sendbox"
          name="question"
          value={message}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="輸入訊息..."
        ></textarea>

        <button className="send-button" onClick={handleSendMessage}>
          <img className="sendicon" src="/img/clip.png" />
        </button>
      </div>
    </>
  );
}
