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
export type IoMdMoonProps = typeof __propDef.props;
export type IoMdMoonEvents = typeof __propDef.events;
export type IoMdMoonSlots = typeof __propDef.slots;
export default class IoMdMoon extends SvelteComponentTyped<IoMdMoonProps, IoMdMoonEvents, IoMdMoonSlots> {
}
export {};
