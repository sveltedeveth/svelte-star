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
export type FaWeixinProps = typeof __propDef.props;
export type FaWeixinEvents = typeof __propDef.events;
export type FaWeixinSlots = typeof __propDef.slots;
export default class FaWeixin extends SvelteComponentTyped<FaWeixinProps, FaWeixinEvents, FaWeixinSlots> {
}
export {};
