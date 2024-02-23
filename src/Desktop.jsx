/* eslint-disable react/prop-types */
import {
    Typography,
    Layout,
    Row,
    Col,
    Affix,
    Image,
    Tooltip,
    Popover,
} from 'antd'

import {
    motion,
} from 'framer-motion'

import {
    useContext,
} from 'react'

import { Context } from './store/Context'

// props: image
function FloatImageCol(props) {
    return (
        <Col span={12}>
            <Row justify='center'>
                <motion.div
                    initial={{ y: 300, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0, duration: 1 } }}
                    viewport={{ once: true }}>
                    <Image height={400} preview={false} src={props.image} style={{ 'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}></Image>
                </motion.div>
            </Row>
        </Col>
    )
}

// props title, text
function FloatTextCol(props) {
    return (
        <Col span={12}>
            <motion.div
                initial={{ y: 300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0, duration: 1 } }}
                viewport={{ once: true }}>
                <Row justify='center' style={{ 'padding': '0px 50px' }}>
                    <Typography.Title>
                        {props.title}
                    </Typography.Title>
                </Row>
                <Row justify='center' style={{ 'padding': '0px 80px' }}>
                    <Typography style={{ 'fontSize': '20px', 'textAlign': 'justify' }}>
                        {props.text}
                    </Typography>
                </Row>
            </motion.div>
        </Col>
    )
}

// props: sectionItem, backgroundColor
function SectionItemImageOnTheLeft(props) {
    return (
        <Row justify='center' align='middle' style={{ 'backgroundColor': props.backgroundColor, 'height': '700px', 'padding': '100px' }}>
            <Row justify='center' align='middle' style={{ 'maxWidth': '2000px' }}>
                <FloatImageCol image={props.sectionItem.image} />
                <FloatTextCol title={props.sectionItem.title} text={props.sectionItem.text} />
            </Row>
        </Row>
    )
}

// props: sectionItem, backgroundColor
function SectionItemImageOnTheRight(props) {
    return (
        <Row justify='center' align='middle' style={{ 'backgroundColor': props.backgroundColor, 'height': '700px', 'padding': '100px' }}>
            <Row justify='center' align='middle' style={{ 'maxWidth': '2000px' }}>
                <FloatTextCol title={props.sectionItem.title} text={props.sectionItem.text} />
                <FloatImageCol image={props.sectionItem.image} />
            </Row>
        </Row>
    )
}

// props: sectionList
function SectionList(props) {
    return (
        <>
            {
                props.sectionList.map((sectionItem, index) => {
                    return (
                        index % 2 === 0 ?
                            <SectionItemImageOnTheLeft sectionItem={sectionItem} backgroundColor={'white'} />
                            :
                            <SectionItemImageOnTheRight sectionItem={sectionItem} backgroundColor={null} />
                    )

                })
            }
        </>
    )
}

function Desktop() {
    const { state, dispatch } = useContext(Context)

    return (
        <Layout style={{ 'minWidth': '1000px' }}>
            <Affix offsetTop={0}>
                <Layout.Header style={{ 'background': 'white', 'height': '70px' }}>
                    <Row justify='center' align='top' style={{ 'backgroundColor': 'white', 'height': '100%' }}>
                        <Row justify='start' align='top' style={{ 'maxWidth': '2000px', 'width': '100%', 'height': '100%', 'backgroundColor': 'white' }}>
                            <Col offset={1} style={{ 'cursor': 'pointer' }} onClick={() => { window.scrollTo(0, 0) }}>
                                <Row justify='center' align='bottom'>
                                    <Col>
                                        <Image height={30} preview={false} src={state.appLogo}></Image>
                                    </Col>
                                    <Col>
                                        <Typography.Title level={3} style={{ 'color': 'black', 'marginLeft': '10px' }}>{state.appName}</Typography.Title>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                </Layout.Header>
            </Affix>

            <Layout.Content>
                {/* cover headline */}
                <Row justify='center' align='middle' style={{ 'backgroundColor': '#eeeeef', 'height': '850px' }}>
                    <Row justify='space-between' align='middle' style={{ 'maxWidth': '2000px' }}>
                        <Col style={{ 'width': '38%', 'backgroundColor': '#FF873C', 'borderRadius': '20px' , 'margin': '0 auto', 'paddingBottom': '30px'}}>
                            
                            <Row justify='center' style={{ 'padding': '20px 50px' }}>
                                <Typography.Title style={{ 'fontSize': '48px' }}>
                                    {state.coverTitle}
                                </Typography.Title>
                            </Row>

                            <Row justify='center' style={{ 'padding': '0px 50px' }}>
                                <Typography style={{ 'fontSize': '28px' }}>
                                    {state.coverTextPart1}
                                </Typography>
                            </Row>

                            <Row justify='center' style={{ 'padding': '0px 50px' }}>
                                <Typography style={{ 'fontSize': '28px', 'fontWeight': 'bold' }}>
                                    {state.coverTextPart2}
                                </Typography>
                            </Row>

                        </Col>

                        <Col style={{ 'width': '60%' }}>
                            <Row justify='end'>
                                <Image  width={1200} height={850} preview={false} src={state.coverImage} style={{'objectFit': 'cover'}}></Image>
                            </Row>
                        </Col>
                    </Row>
                </Row>


                {/* endorsement list */}
                <Row justify='center' align='middle' style={{ 'height': '700px', 'padding': '100px', 'overflow': 'hidden' }}>
                    <Row justify='center' align='middle' style={{ 'maxWidth': '2000px' }}>

                        <motion.div
                            initial={{ y: 300, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0, duration: 1 } }}
                            viewport={{ once: true }}>
                            <Row justify='center'>
                                <Typography.Title>
                                    {state.endorsementTitle}
                                </Typography.Title>
                            </Row>
                            <Row justify='center'>
                                <Typography style={{ 'fontSize': '20px' }}>
                                    {state.endorsementText}
                                </Typography>
                            </Row>

                            <Row justify='center' style={{ 'marginTop': '50px' }}>
                            <Typography style={{ 'fontSize': '17px', 'width': '700px', 'textAlign': 'justify'}}>
                                    <h5>Un poco acerca de nosotros: </h5>Somo una empresa con poco tiempo en el mércado pero que busca dar un muy buen servicio, y además de ofrecer valores agregados para que nuestros clientes obtengan lo justo que necesitan sin precios excesivos. <br /> <br /> Creemos que todo negocio debe darse la portunidad de tener una presencia sólida en línea. En un mundo cada vez más digitalizado, una landing page bien diseñada puede marcar la diferencia entre el éxito y el estancamiento. 
                                </Typography>
                            </Row>

                            

                        </motion.div>

                    </Row>
                    <Image  width={800} height={850} preview={false} src={state.coverImage} style={{'objectFit': 'cover', 'position': 'absolute', 'right': '-950px', 'top': '100px', 'rotate': '140deg'}}></Image>
                    <Image  width={800} height={850} preview={false} src={state.coverImage} style={{'objectFit': 'cover', 'position': 'absolute', 'right': '1150px', 'top': '-1300px', 'rotate': '140deg'}}></Image>


                </Row>

                {/* section list */}
                <SectionList sectionList={state.sectionList} />


                {/* policies */}
                <Row justify='center' align='middle' style={{ 'backgroundColor': 'white', 'height': '500px', 'padding': '100px' }}>
                    <Row justify='left' align='top' style={{ 'maxWidth': '2000px', 'width': '100%' }}>
                        <Col style={{ 'padding': '0px 20px' }}>
                            <Row justify='start' align='middle' style={{ 'cursor': 'pointer' }} onClick={() => { window.scrollTo(0, 0) }}>
                                <Col>
                                    <Image height={30} preview={false} src={state.appLogo} style={{ 'filter': "grayscale(1)", 'opacity': '0.7' }}></Image>
                                </Col>
                                <Col>
                                    <Typography.Title level={3} style={{ 'color': 'gray', 'marginLeft': '10px' }}>{state.appName}</Typography.Title>
                                </Col>
                            </Row>
                            
                        </Col>

                        <Col style={{ 'padding': '0px 20px' }}>
                            <Row justify='start' align='middle' style={{ 'margin': '20px 0' }}>
                                <Typography>
                                    Nuestras redes
                                </Typography>
                            </Row>
                            <Row justify='start' align='middle'>
                                <a href={state.appURL} target='_blank' rel="noopener noreferrer">
                                    <Typography.Title level={5}>
                                        Facaebook
                                    </Typography.Title>
                                </a>
                            </Row>
                            <Row justify='start' align='middle'>
                                <a href={state.appURL } target='_blank' rel="noopener noreferrer">
                                    <Typography.Title level={5}>
                                        Twitter
                                    </Typography.Title>
                                </a>
                            </Row>
                            <Row justify='start' align='middle'>
                                <a href={state.appURL} target='_blank' rel="noopener noreferrer">
                                    <Typography.Title level={5}>
                                        Gmail
                                    </Typography.Title>
                                </a>
                            </Row>
                        </Col>

                        <Col style={{ 'padding': '0px 20px' }}>
                            <Row justify='start' align='middle' style={{ 'margin': '20px 0' }}>
                                <Typography>
                                    ¿Necesitas ayuda?
                                </Typography>
                            </Row>
                            <Row justify='start' align='middle' style={{ 'cursor': 'pointer' }}>
                                <Popover placement='top' title='Contact Us' content={

                                    <a href={state.discordLink} target='_blank' rel="noopener noreferrer">
                                        <Row justify='start' align='middle'>
                                            <Col>
                                                <Image height={40} preview={false} src={state.discordImage}></Image>
                                            </Col>
                                            <Col style={{ 'marginLeft': '5px' }}>
                                                <Typography>Pásate por nuestro Discord</Typography>
                                            </Col>
                                        </Row>

                                    </a>
                                } trigger='click'>
                                    <Typography.Title level={5}>
                                        Contáctanos
                                    </Typography.Title>
                                </Popover>
                            </Row>
                        </Col>
                    </Row>
                </Row>

                <Row justify="center" align='middle' style={{ 'backgroundColor': 'white', 'padding': '0 0 40px 0' }}>
                    <Col>
                        <Typography.Text type="secondary" style={{ 'fontSize': 12 }}>
                            {state.appName} © {new Date().getFullYear()}
                        </Typography.Text>
                    </Col>
                </Row>

            </Layout.Content>

        </Layout>
    )
}

export default Desktop
