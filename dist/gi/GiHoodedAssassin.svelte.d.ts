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
export type GiHoodedAssassinProps = typeof __propDef.props;
export type GiHoodedAssassinEvents = typeof __propDef.events;
export type GiHoodedAssassinSlots = typeof __propDef.slots;
export default class GiHoodedAssassin extends SvelteComponentTyped<GiHoodedAssassinProps, GiHoodedAssassinEvents, GiHoodedAssassinSlots> {
}
export {};
