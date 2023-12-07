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
export type GiAnnexationProps = typeof __propDef.props;
export type GiAnnexationEvents = typeof __propDef.events;
export type GiAnnexationSlots = typeof __propDef.slots;
export default class GiAnnexation extends SvelteComponentTyped<GiAnnexationProps, GiAnnexationEvents, GiAnnexationSlots> {
}
export {};
