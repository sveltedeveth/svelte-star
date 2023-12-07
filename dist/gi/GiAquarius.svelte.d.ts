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
export type GiAquariusProps = typeof __propDef.props;
export type GiAquariusEvents = typeof __propDef.events;
export type GiAquariusSlots = typeof __propDef.slots;
export default class GiAquarius extends SvelteComponentTyped<GiAquariusProps, GiAquariusEvents, GiAquariusSlots> {
}
export {};
