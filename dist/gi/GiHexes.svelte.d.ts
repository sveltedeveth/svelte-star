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
export type GiHexesProps = typeof __propDef.props;
export type GiHexesEvents = typeof __propDef.events;
export type GiHexesSlots = typeof __propDef.slots;
export default class GiHexes extends SvelteComponentTyped<GiHexesProps, GiHexesEvents, GiHexesSlots> {
}
export {};
