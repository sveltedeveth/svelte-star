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
export type GiScabbardProps = typeof __propDef.props;
export type GiScabbardEvents = typeof __propDef.events;
export type GiScabbardSlots = typeof __propDef.slots;
export default class GiScabbard extends SvelteComponentTyped<GiScabbardProps, GiScabbardEvents, GiScabbardSlots> {
}
export {};
