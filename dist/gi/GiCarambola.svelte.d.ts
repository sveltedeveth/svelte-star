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
export type GiCarambolaProps = typeof __propDef.props;
export type GiCarambolaEvents = typeof __propDef.events;
export type GiCarambolaSlots = typeof __propDef.slots;
export default class GiCarambola extends SvelteComponentTyped<GiCarambolaProps, GiCarambolaEvents, GiCarambolaSlots> {
}
export {};
