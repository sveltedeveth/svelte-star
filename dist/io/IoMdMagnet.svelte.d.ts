import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IoMdMagnetProps = typeof __propDef.props;
export type IoMdMagnetEvents = typeof __propDef.events;
export type IoMdMagnetSlots = typeof __propDef.slots;
export default class IoMdMagnet extends SvelteComponentTyped<IoMdMagnetProps, IoMdMagnetEvents, IoMdMagnetSlots> {
}
export {};
