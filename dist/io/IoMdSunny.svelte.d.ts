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
export type IoMdSunnyProps = typeof __propDef.props;
export type IoMdSunnyEvents = typeof __propDef.events;
export type IoMdSunnySlots = typeof __propDef.slots;
export default class IoMdSunny extends SvelteComponentTyped<IoMdSunnyProps, IoMdSunnyEvents, IoMdSunnySlots> {
}
export {};
