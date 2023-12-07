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
export type GiEyelashesProps = typeof __propDef.props;
export type GiEyelashesEvents = typeof __propDef.events;
export type GiEyelashesSlots = typeof __propDef.slots;
export default class GiEyelashes extends SvelteComponentTyped<GiEyelashesProps, GiEyelashesEvents, GiEyelashesSlots> {
}
export {};
