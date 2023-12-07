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
export type FaTelegramPlaneProps = typeof __propDef.props;
export type FaTelegramPlaneEvents = typeof __propDef.events;
export type FaTelegramPlaneSlots = typeof __propDef.slots;
export default class FaTelegramPlane extends SvelteComponentTyped<FaTelegramPlaneProps, FaTelegramPlaneEvents, FaTelegramPlaneSlots> {
}
export {};
