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
export type GiCardPlayProps = typeof __propDef.props;
export type GiCardPlayEvents = typeof __propDef.events;
export type GiCardPlaySlots = typeof __propDef.slots;
export default class GiCardPlay extends SvelteComponentTyped<GiCardPlayProps, GiCardPlayEvents, GiCardPlaySlots> {
}
export {};
