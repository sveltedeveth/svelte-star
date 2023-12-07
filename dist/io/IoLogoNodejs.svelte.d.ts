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
export type IoLogoNodejsProps = typeof __propDef.props;
export type IoLogoNodejsEvents = typeof __propDef.events;
export type IoLogoNodejsSlots = typeof __propDef.slots;
export default class IoLogoNodejs extends SvelteComponentTyped<IoLogoNodejsProps, IoLogoNodejsEvents, IoLogoNodejsSlots> {
}
export {};
