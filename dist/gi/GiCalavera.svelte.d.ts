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
export type GiCalaveraProps = typeof __propDef.props;
export type GiCalaveraEvents = typeof __propDef.events;
export type GiCalaveraSlots = typeof __propDef.slots;
export default class GiCalavera extends SvelteComponentTyped<GiCalaveraProps, GiCalaveraEvents, GiCalaveraSlots> {
}
export {};
