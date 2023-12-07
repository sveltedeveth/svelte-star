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
export type GiPiscesProps = typeof __propDef.props;
export type GiPiscesEvents = typeof __propDef.events;
export type GiPiscesSlots = typeof __propDef.slots;
export default class GiPisces extends SvelteComponentTyped<GiPiscesProps, GiPiscesEvents, GiPiscesSlots> {
}
export {};
