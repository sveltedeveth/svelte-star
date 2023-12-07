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
export type GiHandOfGodProps = typeof __propDef.props;
export type GiHandOfGodEvents = typeof __propDef.events;
export type GiHandOfGodSlots = typeof __propDef.slots;
export default class GiHandOfGod extends SvelteComponentTyped<GiHandOfGodProps, GiHandOfGodEvents, GiHandOfGodSlots> {
}
export {};
