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
export type GiCalderaProps = typeof __propDef.props;
export type GiCalderaEvents = typeof __propDef.events;
export type GiCalderaSlots = typeof __propDef.slots;
export default class GiCaldera extends SvelteComponentTyped<GiCalderaProps, GiCalderaEvents, GiCalderaSlots> {
}
export {};
