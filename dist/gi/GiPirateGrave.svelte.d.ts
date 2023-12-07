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
export type GiPirateGraveProps = typeof __propDef.props;
export type GiPirateGraveEvents = typeof __propDef.events;
export type GiPirateGraveSlots = typeof __propDef.slots;
export default class GiPirateGrave extends SvelteComponentTyped<GiPirateGraveProps, GiPirateGraveEvents, GiPirateGraveSlots> {
}
export {};
