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
export type GoOrganizationProps = typeof __propDef.props;
export type GoOrganizationEvents = typeof __propDef.events;
export type GoOrganizationSlots = typeof __propDef.slots;
export default class GoOrganization extends SvelteComponentTyped<GoOrganizationProps, GoOrganizationEvents, GoOrganizationSlots> {
}
export {};
