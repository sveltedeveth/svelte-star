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
export type GiBirdLimbProps = typeof __propDef.props;
export type GiBirdLimbEvents = typeof __propDef.events;
export type GiBirdLimbSlots = typeof __propDef.slots;
export default class GiBirdLimb extends SvelteComponentTyped<GiBirdLimbProps, GiBirdLimbEvents, GiBirdLimbSlots> {
}
export {};
