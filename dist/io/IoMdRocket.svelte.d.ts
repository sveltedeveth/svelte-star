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
export type IoMdRocketProps = typeof __propDef.props;
export type IoMdRocketEvents = typeof __propDef.events;
export type IoMdRocketSlots = typeof __propDef.slots;
export default class IoMdRocket extends SvelteComponentTyped<IoMdRocketProps, IoMdRocketEvents, IoMdRocketSlots> {
}
export {};
