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
export type GiSpainProps = typeof __propDef.props;
export type GiSpainEvents = typeof __propDef.events;
export type GiSpainSlots = typeof __propDef.slots;
export default class GiSpain extends SvelteComponentTyped<GiSpainProps, GiSpainEvents, GiSpainSlots> {
}
export {};
