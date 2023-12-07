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
export type GiShamrockProps = typeof __propDef.props;
export type GiShamrockEvents = typeof __propDef.events;
export type GiShamrockSlots = typeof __propDef.slots;
export default class GiShamrock extends SvelteComponentTyped<GiShamrockProps, GiShamrockEvents, GiShamrockSlots> {
}
export {};
