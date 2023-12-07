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
export type GiPlesiosaurusProps = typeof __propDef.props;
export type GiPlesiosaurusEvents = typeof __propDef.events;
export type GiPlesiosaurusSlots = typeof __propDef.slots;
export default class GiPlesiosaurus extends SvelteComponentTyped<GiPlesiosaurusProps, GiPlesiosaurusEvents, GiPlesiosaurusSlots> {
}
export {};
