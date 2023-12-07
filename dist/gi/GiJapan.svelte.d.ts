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
export type GiJapanProps = typeof __propDef.props;
export type GiJapanEvents = typeof __propDef.events;
export type GiJapanSlots = typeof __propDef.slots;
export default class GiJapan extends SvelteComponentTyped<GiJapanProps, GiJapanEvents, GiJapanSlots> {
}
export {};
