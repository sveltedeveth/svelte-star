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
export type GiWindpumpProps = typeof __propDef.props;
export type GiWindpumpEvents = typeof __propDef.events;
export type GiWindpumpSlots = typeof __propDef.slots;
export default class GiWindpump extends SvelteComponentTyped<GiWindpumpProps, GiWindpumpEvents, GiWindpumpSlots> {
}
export {};
