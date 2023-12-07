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
export type GiAirtightHatchProps = typeof __propDef.props;
export type GiAirtightHatchEvents = typeof __propDef.events;
export type GiAirtightHatchSlots = typeof __propDef.slots;
export default class GiAirtightHatch extends SvelteComponentTyped<GiAirtightHatchProps, GiAirtightHatchEvents, GiAirtightHatchSlots> {
}
export {};
