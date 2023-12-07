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
export type GiBarbuteProps = typeof __propDef.props;
export type GiBarbuteEvents = typeof __propDef.events;
export type GiBarbuteSlots = typeof __propDef.slots;
export default class GiBarbute extends SvelteComponentTyped<GiBarbuteProps, GiBarbuteEvents, GiBarbuteSlots> {
}
export {};
