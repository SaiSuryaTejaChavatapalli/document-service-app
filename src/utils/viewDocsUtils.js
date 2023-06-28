export function formatSizeUnits(bytes) {
  if (bytes >= 1073741824) {
    bytes = (bytes / 1073741824).toFixed(2) + " GB";
  } else if (bytes >= 1048576) {
    bytes = (bytes / 1048576).toFixed(2) + " MB";
  } else if (bytes >= 1024) {
    bytes = (bytes / 1024).toFixed(2) + " KB";
  } else if (bytes > 1) {
    bytes = bytes + " bytes";
  } else if (bytes == 1) {
    bytes = bytes + " byte";
  } else {
    bytes = "0 bytes";
  }
  return bytes;
}
export const dateFn = (data) => {
  let d = new Date(data.date);
  let month =
    d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
  let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
  let date = `${day}-${month}-${d.getFullYear()}`;
  return date;
};

export const dateFilter = (data, start, end) => {
  console.log({ start, end, data });
  const filteredData = data.filter((item) => {
    const startDate = new Date(start);

    const endDate = new Date(end + " " + "11:59 pm");
    const itemDate = new Date(item.date);

    return itemDate >= startDate && itemDate <= endDate;
  });
  console.log(filteredData);
  return filteredData;
};
