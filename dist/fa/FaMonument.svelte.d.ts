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
export type FaMonumentProps = typeof __propDef.props;
export type FaMonumentEvents = typeof __propDef.events;
export type FaMonumentSlots = typeof __propDef.slots;
export default class FaMonument extends SvelteComponentTyped<FaMonumentProps, FaMonumentEvents, FaMonumentSlots> {
}
export {};
