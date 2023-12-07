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
export type GiOrganigramProps = typeof __propDef.props;
export type GiOrganigramEvents = typeof __propDef.events;
export type GiOrganigramSlots = typeof __propDef.slots;
export default class GiOrganigram extends SvelteComponentTyped<GiOrganigramProps, GiOrganigramEvents, GiOrganigramSlots> {
}
export {};
