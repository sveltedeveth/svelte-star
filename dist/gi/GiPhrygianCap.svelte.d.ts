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
export type GiPhrygianCapProps = typeof __propDef.props;
export type GiPhrygianCapEvents = typeof __propDef.events;
export type GiPhrygianCapSlots = typeof __propDef.slots;
export default class GiPhrygianCap extends SvelteComponentTyped<GiPhrygianCapProps, GiPhrygianCapEvents, GiPhrygianCapSlots> {
}
export {};
