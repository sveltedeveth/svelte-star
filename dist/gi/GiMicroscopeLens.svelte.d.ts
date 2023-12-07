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
export type GiMicroscopeLensProps = typeof __propDef.props;
export type GiMicroscopeLensEvents = typeof __propDef.events;
export type GiMicroscopeLensSlots = typeof __propDef.slots;
export default class GiMicroscopeLens extends SvelteComponentTyped<GiMicroscopeLensProps, GiMicroscopeLensEvents, GiMicroscopeLensSlots> {
}
export {};
