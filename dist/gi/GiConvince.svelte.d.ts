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
export type GiConvinceProps = typeof __propDef.props;
export type GiConvinceEvents = typeof __propDef.events;
export type GiConvinceSlots = typeof __propDef.slots;
export default class GiConvince extends SvelteComponentTyped<GiConvinceProps, GiConvinceEvents, GiConvinceSlots> {
}
export {};
