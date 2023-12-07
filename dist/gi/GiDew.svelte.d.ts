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
export type GiDewProps = typeof __propDef.props;
export type GiDewEvents = typeof __propDef.events;
export type GiDewSlots = typeof __propDef.slots;
export default class GiDew extends SvelteComponentTyped<GiDewProps, GiDewEvents, GiDewSlots> {
}
export {};
