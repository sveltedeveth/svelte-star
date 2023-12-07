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
export type GiSnailEyesProps = typeof __propDef.props;
export type GiSnailEyesEvents = typeof __propDef.events;
export type GiSnailEyesSlots = typeof __propDef.slots;
export default class GiSnailEyes extends SvelteComponentTyped<GiSnailEyesProps, GiSnailEyesEvents, GiSnailEyesSlots> {
}
export {};
