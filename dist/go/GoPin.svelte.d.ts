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
export type GoPinProps = typeof __propDef.props;
export type GoPinEvents = typeof __propDef.events;
export type GoPinSlots = typeof __propDef.slots;
export default class GoPin extends SvelteComponentTyped<GoPinProps, GoPinEvents, GoPinSlots> {
}
export {};
