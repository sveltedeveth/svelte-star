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
export type MdAllInclusiveProps = typeof __propDef.props;
export type MdAllInclusiveEvents = typeof __propDef.events;
export type MdAllInclusiveSlots = typeof __propDef.slots;
export default class MdAllInclusive extends SvelteComponentTyped<MdAllInclusiveProps, MdAllInclusiveEvents, MdAllInclusiveSlots> {
}
export {};
