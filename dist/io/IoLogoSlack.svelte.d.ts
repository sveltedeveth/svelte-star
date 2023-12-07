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
export type IoLogoSlackProps = typeof __propDef.props;
export type IoLogoSlackEvents = typeof __propDef.events;
export type IoLogoSlackSlots = typeof __propDef.slots;
export default class IoLogoSlack extends SvelteComponentTyped<IoLogoSlackProps, IoLogoSlackEvents, IoLogoSlackSlots> {
}
export {};
