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
export type GiForestProps = typeof __propDef.props;
export type GiForestEvents = typeof __propDef.events;
export type GiForestSlots = typeof __propDef.slots;
export default class GiForest extends SvelteComponentTyped<GiForestProps, GiForestEvents, GiForestSlots> {
}
export {};
