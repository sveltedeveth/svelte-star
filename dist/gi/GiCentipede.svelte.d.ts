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
export type GiCentipedeProps = typeof __propDef.props;
export type GiCentipedeEvents = typeof __propDef.events;
export type GiCentipedeSlots = typeof __propDef.slots;
export default class GiCentipede extends SvelteComponentTyped<GiCentipedeProps, GiCentipedeEvents, GiCentipedeSlots> {
}
export {};
