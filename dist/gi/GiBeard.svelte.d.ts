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
export type GiBeardProps = typeof __propDef.props;
export type GiBeardEvents = typeof __propDef.events;
export type GiBeardSlots = typeof __propDef.slots;
export default class GiBeard extends SvelteComponentTyped<GiBeardProps, GiBeardEvents, GiBeardSlots> {
}
export {};
