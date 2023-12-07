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
export type GiAngolaProps = typeof __propDef.props;
export type GiAngolaEvents = typeof __propDef.events;
export type GiAngolaSlots = typeof __propDef.slots;
export default class GiAngola extends SvelteComponentTyped<GiAngolaProps, GiAngolaEvents, GiAngolaSlots> {
}
export {};
