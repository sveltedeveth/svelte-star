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
export type GiHastyGraveProps = typeof __propDef.props;
export type GiHastyGraveEvents = typeof __propDef.events;
export type GiHastyGraveSlots = typeof __propDef.slots;
export default class GiHastyGrave extends SvelteComponentTyped<GiHastyGraveProps, GiHastyGraveEvents, GiHastyGraveSlots> {
}
export {};
