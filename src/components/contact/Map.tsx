const Map = () => {
  return (
    <div className="overflow-hidden rounded-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5781461388665!2d90.37361507616782!3d23.83359557861377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c74e0dc7f5db%3A0xb510d8d31a71af97!2sGrey%20Stone%20International!5e0!3m2!1sen!2sbd!4v1696848312996!5m2!1sen!2sbd"
        width="300"
        height="150"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
        // className="object-cover"
      ></iframe>
    </div>
  );
};

export default Map;
