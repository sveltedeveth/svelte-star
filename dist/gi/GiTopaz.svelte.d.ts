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
export type GiTopazProps = typeof __propDef.props;
export type GiTopazEvents = typeof __propDef.events;
export type GiTopazSlots = typeof __propDef.slots;
export default class GiTopaz extends SvelteComponentTyped<GiTopazProps, GiTopazEvents, GiTopazSlots> {
}
export {};
