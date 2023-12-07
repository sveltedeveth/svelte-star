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
export type DiJqueryLogoProps = typeof __propDef.props;
export type DiJqueryLogoEvents = typeof __propDef.events;
export type DiJqueryLogoSlots = typeof __propDef.slots;
export default class DiJqueryLogo extends SvelteComponentTyped<DiJqueryLogoProps, DiJqueryLogoEvents, DiJqueryLogoSlots> {
}
export {};
