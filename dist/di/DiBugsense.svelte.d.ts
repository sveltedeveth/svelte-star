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
export type DiBugsenseProps = typeof __propDef.props;
export type DiBugsenseEvents = typeof __propDef.events;
export type DiBugsenseSlots = typeof __propDef.slots;
export default class DiBugsense extends SvelteComponentTyped<DiBugsenseProps, DiBugsenseEvents, DiBugsenseSlots> {
}
export {};
