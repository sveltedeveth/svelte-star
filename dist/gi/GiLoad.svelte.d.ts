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
export type GiLoadProps = typeof __propDef.props;
export type GiLoadEvents = typeof __propDef.events;
export type GiLoadSlots = typeof __propDef.slots;
export default class GiLoad extends SvelteComponentTyped<GiLoadProps, GiLoadEvents, GiLoadSlots> {
}
export {};
