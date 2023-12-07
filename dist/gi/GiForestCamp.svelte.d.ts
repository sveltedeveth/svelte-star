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
export type GiForestCampProps = typeof __propDef.props;
export type GiForestCampEvents = typeof __propDef.events;
export type GiForestCampSlots = typeof __propDef.slots;
export default class GiForestCamp extends SvelteComponentTyped<GiForestCampProps, GiForestCampEvents, GiForestCampSlots> {
}
export {};
